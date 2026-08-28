from pathlib import Path
import runpy

root = Path(__file__).resolve().parents[1]
workflow = (root / '.github/workflows/science-physics-publish.yml').resolve()
original_write_text = Path.write_text


def guarded_write_text(self, data, *args, **kwargs):
    if self.resolve() == workflow:
        # The temporary migration computes the workflow changes too, but the
        # GitHub Actions token cannot push workflow edits. The connector applies
        # those separately after the implementation branch is validated.
        return len(data)
    return original_write_text(self, data, *args, **kwargs)


Path.write_text = guarded_write_text
try:
    runpy.run_path(str(root / 'scripts/_apply_science_shm_numeric_period_patch.py'), run_name='__main__')
finally:
    Path.write_text = original_write_text
