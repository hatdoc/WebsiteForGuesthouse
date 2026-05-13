import os
import glob

def fix_html_files():
    html_files = glob.glob('*.html')
    for file in html_files:
        with open(file, 'r') as f:
            content = f.read()
        
        # Check if mobile lang toggle already exists
        if '<button class="lang-btn mobile-lang-toggle"' in content:
            continue
            
        # Add the mobile lang toggle at the end of the mobile nav
        target = '</div>\n    </nav>'
        replacement = '    <button class="lang-btn mobile-lang-toggle" style="margin-top: 1rem; text-align: center;">KR</button>\n        </div>\n    </nav>'
        
        if target in content:
            new_content = content.replace(target, replacement)
            with open(file, 'w') as f:
                f.write(new_content)
            print(f"Updated {file}")

if __name__ == '__main__':
    fix_html_files()
