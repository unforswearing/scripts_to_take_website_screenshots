import sys
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager

# note: Selenium does not provide a way to resize the screenshot

# this script accepts a url as the first argument
url = sys.argv[1]
# pass a filename to the script as the second argument
filename = sys.argv[2]

# set up webdriver
chromedriver = webdriver.Chrome(ChromeDriverManager().install())

# navigate to the url
chromedriver.get(url)

# save the screenshot to `filename`
chromedriver.save_screenshot(filename)

# quit the Chrome webdriver
chromedriver.quit()

print("done")
