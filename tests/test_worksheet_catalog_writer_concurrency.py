from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parents[1]
WORKFLOWS = ROOT / ".github" / "workflows"
SHARED_GROUP = "worksheet-catalog-publish-v1"


class WorksheetCatalogWriterConcurrencyTests(unittest.TestCase):
    def catalog_writer_workflows(self):
        writers = {}
        for path in sorted(WORKFLOWS.glob("*.yml")):
            text = path.read_text(encoding="utf-8")
            if "git add worksheets/catalog.json" in text:
                writers[path.name] = text
        return writers

    def test_all_catalog_writer_workflows_share_one_repository_group(self):
        writers = self.catalog_writer_workflows()
        expected = {
            "grade1-variant-publish.yml",
            "grade2-core-publish.yml",
            "grade3-core-publish.yml",
            "grade4-core-publish.yml",
            "grade5-core-publish.yml",
            "grade6-core-publish.yml",
            "math-jh1-publish.yml",
            "math-jh2-publish.yml",
            "science-jh1-publish.yml",
            "science-jh2-publish.yml",
            "science-jh3-publish.yml",
            "science-physics-basic-publish.yml",
            "science-physics-publish.yml",
        }
        self.assertEqual(set(writers), expected)
        for name, text in writers.items():
            self.assertIn("concurrency:", text, name)
            self.assertIn(f"group: {SHARED_GROUP}", text, name)
            self.assertIn("cancel-in-progress: false", text, name)

    def test_no_publish_workflow_uses_a_private_catalog_concurrency_group(self):
        for name, text in self.catalog_writer_workflows().items():
            group_lines = [line.strip() for line in text.splitlines() if line.strip().startswith("group:")]
            self.assertEqual(group_lines, [f"group: {SHARED_GROUP}"], name)


if __name__ == "__main__":
    unittest.main()
