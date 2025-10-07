from playwright.sync_api import sync_playwright, expect

def run_verification():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        try:
            # Navigate to the homepage
            page.goto("http://localhost:3000", timeout=60000)

            # Wait for the hero section to be visible to ensure the page has loaded
            hero_section = page.locator("section:has-text('Transforma tu Energía')")
            expect(hero_section).to_be_visible(timeout=30000)

            # Take a screenshot of the homepage
            page.screenshot(path="jules-scratch/verification/verification.png")

            print("Screenshot taken successfully.")

        except Exception as e:
            print(f"An error occurred: {e}")

        finally:
            browser.close()

if __name__ == "__main__":
    run_verification()