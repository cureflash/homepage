package jp.cureflash.powercolor;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import androidx.test.core.app.ActivityScenario;
import androidx.test.ext.junit.runners.AndroidJUnit4;

import org.junit.Test;
import org.junit.runner.RunWith;

import java.util.concurrent.CountDownLatch;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicReference;

@RunWith(AndroidJUnit4.class)
public final class MainActivityTest {
    private static String evaluate(ActivityScenario<MainActivity> scenario, String script)
            throws InterruptedException {
        CountDownLatch latch = new CountDownLatch(1);
        AtomicReference<String> result = new AtomicReference<>();
        scenario.onActivity(activity -> activity.getWebView().evaluateJavascript(script, value -> {
            result.set(value);
            latch.countDown();
        }));
        assertTrue("JavaScript evaluation timed out", latch.await(10, TimeUnit.SECONDS));
        return result.get();
    }

    private static void awaitQuiz(ActivityScenario<MainActivity> scenario, String skill)
            throws InterruptedException {
        String click = "(() => { const b = document.querySelector('[data-skill=\"" + skill
                + "\"]'); const q = document.querySelector('[data-view=\"quiz\"]'); "
                + "if (!b || !q) return false; b.click(); "
                + "return !q.hidden && document.querySelectorAll('button.choice').length === 4; })()";
        for (int i = 0; i < 100; i++) {
            if ("true".equals(evaluate(scenario, click))) return;
            Thread.sleep(200);
        }
        throw new AssertionError("Quiz did not start for " + skill);
    }

    private static void completeQuiz(ActivityScenario<MainActivity> scenario, String skill,
            int questionCount) throws InterruptedException {
        awaitQuiz(scenario, skill);
        for (int i = 0; i < questionCount; i++) {
            assertEquals("true", evaluate(scenario,
                    "(() => { const c = document.querySelector('button.choice'); "
                            + "if (!c) return false; c.click(); "
                            + "return !document.querySelector('[data-action=\"next\"]').hidden "
                            + "&& !document.querySelector('[data-role=\"explanation\"]').hidden; })()"));
            assertEquals("true", evaluate(scenario,
                    "(() => { document.querySelector('[data-action=\"next\"]').click(); return true; })()"));
        }
        assertEquals("true", evaluate(scenario,
                "(() => !document.querySelector('[data-view=\"result\"]').hidden "
                        + "&& document.querySelector('[data-role=\"result\"]').textContent.includes('正解'))()"));
        assertEquals("true", evaluate(scenario,
                "(() => { document.querySelector('[data-action=\"home\"]').click(); "
                        + "return !document.querySelector('[data-view=\"home\"]').hidden; })()"));
    }

    @Test
    public void allExistingModesCompleteFromBundledAssets() throws Exception {
        try (ActivityScenario<MainActivity> scenario = ActivityScenario.launch(MainActivity.class)) {
            completeQuiz(scenario, "pc3.conventional.color_to_name", 8);
            completeQuiz(scenario, "pc3.conventional.name_to_color", 8);
            completeQuiz(scenario, "mixed", 10);
        }
    }
}
