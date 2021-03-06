loadAPI(15);

// Remove this if you want to be able to use deprecated methods without causing script to stop.
// This is useful during development.
host.setShouldFailOnDeprecatedUse(true);

host.defineController(
    "DJ TechTools",
    "Midi Fighter Twister",
    "1.0.0",
    "501a7221-60e3-425e-9dc8-591e5cf505ae",
    "Gianfranco Cecconi <giacecco@giacecco.com>"
);

host.defineMidiPorts(1, 1);

if (host.platformIsWindows())
{
   // TODO: Set the correct names of the ports for auto detection on Windows platform here
   // and uncomment this when port names are correct.
   // host.addDeviceNameBasedDiscoveryPair(["Input Port 0"], ["Output Port 0"]);
}
else if (host.platformIsMac())
{
    host.addDeviceNameBasedDiscoveryPair (["Midi Fighter Twister"], ["Midi Fighter Twister"]);
    host.addDeviceNameBasedDiscoveryPair (["Midi Fighter Twister #2"], ["Midi Fighter Twister #2"]);
    host.addDeviceNameBasedDiscoveryPair (["Midi Fighter Twister #3"], ["Midi Fighter Twister #3"]);
    host.addDeviceNameBasedDiscoveryPair (["Midi Fighter Twister #4"], ["Midi Fighter Twister #4"]);
}
else if (host.platformIsLinux())
{
   // TODO: Set the correct names of the ports for auto detection on Linux platform here
   // and uncomment this when port names are correct.
   // host.addDeviceNameBasedDiscoveryPair(["Input Port 0"], ["Output Port 0"]);
}

function init() {
   transport = host.createTransport();
   host.getMidiInPort(0).setMidiCallback(onMidi0);
   host.getMidiInPort(0).setSysexCallback(onSysex0);
   println("Midi Fighter Twister initialized!");
}

// Called when a short MIDI message is received on MIDI input port 0.
function onMidi0(status, data1, data2) {
   // TODO: Implement your MIDI input handling code here.
   // NOTE: this function is called only if Bitwig does not have any mapping
   // configured for the respective MIDI rotary or switch!
   // println(status + " " + data1 + " " + data2)
}

// Called when a MIDI sysex message is received on MIDI input port 0.
function onSysex0(data) {
   // MMC Transport Controls:
   switch (data) {
      case "f07f7f0605f7":
         transport.rewind();
         break;
      case "f07f7f0604f7":
         transport.fastForward();
         break;
      case "f07f7f0601f7":
         transport.stop();
         break;
      case "f07f7f0602f7":
         transport.play();
         break;
      case "f07f7f0606f7":
         transport.record();
         break;
   }
}

function flush() {
   // TODO: Flush any output to your controller here.
}

function exit() {

}
