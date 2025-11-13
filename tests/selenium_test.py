from selenium import webdriver
from selenium.webdriver.common.by import By
import time

driver = webdriver.Chrome()  # certifique-se que o chromedriver está no PATH
driver.get("http://localhost:3000")

# Registrar
driver.find_element(By.ID, "username").send_keys("selenium")
driver.find_element(By.ID, "password").send_keys("123")
driver.find_element(By.XPATH, "//button[text()='Registrar']").click()
time.sleep(1)

# Logar
driver.find_element(By.ID, "username").clear()
driver.find_element(By.ID, "username").send_keys("selenium")
driver.find_element(By.ID, "password").send_keys("123")
driver.find_element(By.XPATH, "//button[text()='Login']").click()
time.sleep(1)

# Criar tarefa
driver.find_element(By.ID, "newTask").send_keys("Testar UI com Selenium")
driver.find_element(By.XPATH, "//button[text()='Adicionar']").click()
time.sleep(1)

print("✅ Teste Selenium executado com sucesso!")
driver.quit()
