#!/bin/bash

# Create directories if they don't exist
mkdir -p public/assets/images/experience
mkdir -p public/assets/fonts

echo "Creating placeholder Minecraft assets..."

# Create a simple dirt/grass background
echo "Creating minecraft-bg.png..."
cat > public/assets/images/minecraft-bg.png.b64 << 'EOL'
iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA
B3RJTUUH4AkZCR4rG7CD3gAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUH
AAAAIUlEQVQoz2NgGFggPCJCTU2NcGg0NDQYGRnxBQ8O2NcJADLFBQVL95yJAAAAAElFTkSuQmCC
EOL

# Create a simple enchanting table icon
echo "Creating enchanting-table.png..."
cat > public/assets/images/enchanting-table.png.b64 << 'EOL'
iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA
B3RJTUUH4AkZCSAYYpzDDQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUH
AAAAaElEQVQoz52RwQ3AIAwDL1HW8EysxCBs0j06SRnAP6QiRfDT2IdlG9tIt6Rf0VvS7yGPRG8n
LDKzq7oOwCIzy9h7Z2ZI4j6pKiRJquouqgJwhAMA3J8G2leYmZ1zItI5R0TGGGMMAHwJF0EQH7LZ
ZObkAAAAAElFTkSuQmCC
EOL

# Create a simple minecraft sword icon
echo "Creating minecraft-sword.png..."
cat > public/assets/images/minecraft-sword.png.b64 << 'EOL'
iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA
B3RJTUUH4AkZCSExlS1C5AAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUH
AAAARElEQVQoz2NgGAUkgfCICDU1NVwKGhoajIyM8JiUlJQECRAEpqam8vLyuNS1traCBAgCY2Nj
LS0tXOp6enogAYJgBGQfAD/sBgWpgzXgAAAAAElFTkSuQmCC
EOL

# Create a simple minecraft chest icon
echo "Creating minecraft-chest.png..."
cat > public/assets/images/minecraft-chest.png.b64 << 'EOL'
iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA
B3RJTUUH4AkZCSE9QpyQKAAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUH
AAAASElEQVQoz2NgGAU4QXhEhJqaGi41DQ0NRkZGXGqSkpKQBXCBqakpPEYhg9ZWbEYhAGNjYy0t
LVxqenp6kARwAWNjY1xyIyD7APBeBQWHwS52AAAAAElFTkSuQmCC
EOL

# Create placeholder company icons
echo "Creating experience/amadeus.png..."
cat > public/assets/images/experience/amadeus.png.b64 << 'EOL'
iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA
B3RJTUUH4AkZCSIR0xlyNAAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUH
AAAARklEQVQoz2NgGHyAkZGRgYHB2NhYS0sLl+Kenh4GBgYjIyM1NTVcipOSkhgYGBoaGnApDo+I
YGBgMDU1lZeXx6W4tXUE5BQAs8UGBfV+cB8AAAAASUVORK5CYII=
EOL

echo "Creating experience/techmahindra.png..."
cat > public/assets/images/experience/techmahindra.png.b64 << 'EOL'
iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA
B3RJTUUH4AkZCSIuShQrtgAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUH
AAAAQUlEQVQoz2NgGKJAXl4el0JTU1MGBgYtLS1cint6ehgYGNTU1HApDo+IYGBgaGhowKU4KSmJ
gYHB2NgYl+IRkH0A3WsGBQp26Q0AAAAASUVORK5CYII=
EOL

# Decode all base64 files
for file in $(find public/assets/images -name "*.b64"); do
    base64 -d < "$file" > "${file%.b64}"
    rm "$file"
done

echo "Placeholder Minecraft assets created!"
echo "For production use, replace these with actual Minecraft-themed images."
echo "For the Minecraft font, download a web font version and place it in public/assets/fonts/Minecraft.woff2"
