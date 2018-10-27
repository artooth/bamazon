

USE bamazon;

CREATE TABLE products(
item_id INT AUTO_INCREMENT NOT NULL,
product_name VARCHAR(45) NOT NULL,
department_name VARCHAR(45) NOT NULL,
price DECIMAL(10,2) NOT NULL,
stock_quantity INT NOT NULL,
PRIMARY KEY(item_id)
);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES("iphone", "cellphones", 699.99, 200),
("headphones", "electronics", 30.00, 40),
("bike", "sports & recreation", 329.99, 23),
("Catan", "board games", 49.99, 340),
("water bottle", "sports & recreation", 13.99, 59),
("candle", "home goods", 5.99, 300),
("sunglasses", "apparel", 21.99, 115),
("pillows", "home goods", 6.00, 10),
("cactus", "garden", 9.99, 12),
("vitamin C", "health", 12.00, 35),
("coat", "apparel", 59.99, 31),
("candy", "food", 2.99, 100);