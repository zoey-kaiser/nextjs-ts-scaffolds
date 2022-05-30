#!/bin/sh
# Remove all the node_modules folders as we do not want to include them
rm -R ./minimal/frontend/node_modules
rm -R ./with-tailwind/frontend/node_modules
rm -R ./with-tailwind-daisyui/frontend/node_modules
rm -R ./with-tailwind-flowbite/frontend/node_modules
rm -R ./with-tailwind-mantine/frontend/node_modules

# Zip up all the scaffolds into the dist folder
zip -r dist/minimal.zip ./minimal
zip -r dist/with-tailwind.zip ./with-tailwind
zip -r dist/with-tailwind-daisyui.zip ./with-tailwind-daisyui
zip -r dist/with-tailwind-flowbite.zip ./with-tailwind-flowbite
zip -r dist/with-tailwind-mantine.zip ./with-tailwind-mantine
