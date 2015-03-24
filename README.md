# psd-fonts

Script to get the list of all fonts used in a PSD (Photoshop) file.

## Usage

You only need to open a PSD file in your Photoshop, then go to `File` menu and choose `Scripts` » `Search`, and choose the script from where you saved it.

The script may take a while to run, depending on the number of layer you have in your file.

After it loop through all document layers, a `txt` file will be created in the same path your PSD containning the list of all fonts used on it. The list have the following syntax:

````
TEXT
Font name,Size,Color (hex)
--
...
````

## Bugs

I only tested this script in the current Photoshop version (CC 2014). If you find some bug in another version, please open an issue.
