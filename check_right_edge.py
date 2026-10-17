from PIL import Image
import numpy as np

img = Image.open('public/images/products/clean/hry-850a-paper-cup-flexo.webp')
arr = np.array(img)

# Print a slice of the right edge to see if it becomes white
print("Right edge pixels (middle row):")
for i in range(1580, 1600):
    print(f"x={i}: {arr[500, i]}")
