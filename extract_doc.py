import xml.etree.ElementTree as ET
import sys

def extract_text(xml_file):
    try:
        tree = ET.parse(xml_file)
        root = tree.getroot()
        
        # XML namespaces in Word docs are tricky, usually xmlns:w.
        # We can find all 'w:t' tags.
        namespaces = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
        
        text_content = []
        for p in root.findall('.//w:p', namespaces):
            para_text = ""
            for t in p.findall('.//w:t', namespaces):
                if t.text:
                    para_text += t.text
            if para_text.strip():
                text_content.append(para_text)
                
        print("\n".join(text_content))
    except Exception as e:
        print(f"Error parsing XML: {e}")

if __name__ == "__main__":
    extract_text("temp_docx_extract/extracted/word/document.xml")
