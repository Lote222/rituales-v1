import asyncio
from playwright.async_api import async_playwright, expect

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # 1. Verify Homepage
        print("Navigating to Homepage...")
        await page.goto("http://localhost:3000")

        # Wait for the main headline to be visible
        hero_headline = page.get_by_role("heading", name="Transforma tu Energía, Manifiesta tus Deseos")
        await expect(hero_headline).to_be_visible(timeout=15000) # Increased timeout for server start

        print("Taking screenshot of Homepage...")
        await page.screenshot(path="jules-scratch/verification/01_homepage.png", full_page=True)

        # 2. Verify Product Detail Page
        print("Navigating to Product Detail Page...")
        # Click on the first product card to navigate
        await page.get_by_text("Ritual de Abundancia Infinita").first.click()

        # Wait for the product title to be visible on the new page
        product_title = page.get_by_role("heading", name="Ritual de Abundancia Infinita")
        await expect(product_title).to_be_visible(timeout=10000)

        print("Taking screenshot of Product Detail Page...")
        await page.screenshot(path="jules-scratch/verification/02_product_detail_page.png", full_page=True)

        # 3. Verify Lottery Page
        print("Navigating to Lottery Page...")
        await page.goto("http://localhost:3000/circulo-de-la-suerte")

        # Wait for the winner display to be visible
        winner_headline = page.get_by_role("heading", name="¡Felicidades a nuestro Ganador!")
        await expect(winner_headline).to_be_visible(timeout=10000)

        print("Taking screenshot of Lottery Page...")
        await page.screenshot(path="jules-scratch/verification/03_lottery_page.png", full_page=True)

        await browser.close()
        print("Verification script finished successfully.")

if __name__ == "__main__":
    asyncio.run(main())