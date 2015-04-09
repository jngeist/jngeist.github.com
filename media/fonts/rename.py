import os
import re

for f in os.listdir('.'):
    nn = f.lower()
    nn = re.sub(' ', '-', nn)
    os.rename(f, nn)

