from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager

chromedriver = webdriver.Chrome(ChromeDriverManager().install())

chromedriver.get("https://www.urlbox.io")

chromedriver.save_screenshot("screenshot.png")

chromedriver.quit()
