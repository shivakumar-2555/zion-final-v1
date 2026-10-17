import os
from pypdf import PdfReader

d = r'C:\Users\ADMIN\Desktop\ZionPrintTech\website\public\docs\brochures'
out = r'C:\Users\ADMIN\.gemini\antigravity-ide\brain\5ce07064-cfb2-43b1-8641-a83c25434b12\scratch\pdf_extractions.txt'

res = ""
for f in os.listdir(d):
    if f.lower().endswith('.pdf'):
        res += "\n\n=========================================\n"
        res += f"FILENAME: {f}\n"
        res += "=========================================\n\n"
        try:
            reader = PdfReader(os.path.join(d, f))
            for page in reader.pages:
                res += page.extract_text() + "\n"
        except Exception as e:
            res += f"[Error extracting text: {e}]"

with open(out, 'w', encoding='utf-8') as file:
    file.write(res)
print("PDF extraction complete.")
