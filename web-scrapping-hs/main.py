from selenium import webdriver
import pandas as pd
import time

class HQStore:
    def __init__(self) -> None:
        self.site_link = 'https://hqstore-sn.netlify.app'
        self.driver = webdriver.Chrome(executable_path="C:\\chromedriver.exe")
        self.driver.maximize_window()
        
    def abrir_site(self):
        time.sleep(2)
        self.driver.get(self.site_link)
        time.sleep(1)
        
    def nav(self):
        self.btnProducts = self.driver.find_element('xpath', '/html/body/header/nav/div/div/ul/li[2]/a')
        self.btnProducts.click()
        time.sleep(2)
        self.driver.refresh()
        
    def allProducts(self):
        self.titulos = []
        self.precos = []
        lista = self.driver.find_element('class name', 'allProducts')
        produtos = lista.text
        produtos = produtos.split("\n")
        tamanho = len(produtos)
        
        df = pd.DataFrame(columns=['Titulo', 'Preco'])
        for indice in range(0, tamanho, 2):
            df.loc[indice] = produtos[indice : indice + 2]
        df.to_excel("HQs.xlsx", index=False)
    
    def web(self):
        self.abrir_site()
        self.nav()
        self.allProducts()
        
site = HQStore()
site.web()