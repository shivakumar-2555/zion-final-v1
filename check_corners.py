from PIL import Image
import numpy as np

img = Image.open('public/images/products/clean/hry-850a-paper-cup-flexo.webp')
arr = np.array(img)

# Print colors at the corners and middle edges
print(f"Top-Left (0,0): {arr[0, 0]}")
print(f"Top-Right (0,-1): {arr[0, -1]}")
print(f"Bottom-Left (-1,0): {arr[-1, 0]}")
print(f"Bottom-Right (-1,-1): {arr[-1, -1]}")
print(f"Top-Middle (0, 800): {arr[0, 800]}")
print(f"Right-Middle (500, -1): {arr[500, -1]}")
