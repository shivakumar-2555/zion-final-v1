from PIL import Image
import numpy as np

img = Image.open('public/images/products/clean/hry-850a-paper-cup-flexo.webp')
print(f"Image size: {img.size}")
arr = np.array(img)
# Find the first and last non-white pixels
# White is [255, 255, 255]
is_not_white = np.any(arr[:, :, :3] < 240, axis=2)
rows = np.any(is_not_white, axis=1)
cols = np.any(is_not_white, axis=0)

ymin, ymax = np.where(rows)[0][[0, -1]]
xmin, xmax = np.where(cols)[0][[0, -1]]

print(f"Content bounding box: xmin={xmin}, xmax={xmax}, ymin={ymin}, ymax={ymax}")
print(f"White borders: top={ymin}, bottom={img.size[1]-ymax}, left={xmin}, right={img.size[0]-xmax}")
