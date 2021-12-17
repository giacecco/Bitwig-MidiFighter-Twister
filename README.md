# Bitwig-MidiFighter-Twister

This is a controller script for DJ TechTools' Midi Fighter Twister doing almost nothing... but nothing is enough!

It was originally inspired by [the original work of Artur Brahms](https://github.com/Artur-Brahms/Bitwig-MidiFighterTwister-CME) until I realized that Artur's original did not fully work in Bitwig Studio 4.1.2, probably because of changes in Bitwig's APIs, since his last changes in 2019. Creating a blank project from Bitwig, and doing a few minimal adaptations, made everything I've tested work out of the box on macOS.

Note that autodetection is not implemented for operating systems other than macOS. I haven't investigated if the same code works on the other platforms, too: feel free to try for yourselves and make a pull request.

## Installation

- Download and extract the ZIP archive.
- Put the folder `Bitwig-Midifighter-Twister` into the following location on your system:
	- Mac & Linux: `~/Documents/Bitwig Studio/Controller Scripts/`
	- Windows: `%Userprofile%\Documents\Bitwig Studio\Controller Scripts`
	- or the user-defined path that you have set up in Bitwig (Settings > Locations > My Controller Scripts)
- Add the controller (Settings > Controllers > Add)
- Select "DJ TechTools from the "Hardware Vendor" drop down list
- Select "Midi Fighter Twister" from the "Product" list box and click "Add"
- Set up the MIDI in/out ports, named "Midi Fighter Twister (number)"

Up to four devices are supported.

## MIT License

Copyright (c) 2021 Gianfranco Cecconi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
