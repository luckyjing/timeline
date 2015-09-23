# timeline
This is an easy plugin for time line.
# Quick Start
### First
 you should insure you have already import jQuery.
### Usage
The html like this:
```
<link rel="stylesheet" href="../src/timeline.css"/>

<div class="timeline">
    <div class="line">
    </div>
    <div class="line-mask">
    </div>
	
<script src="../src/timeline.js"></script>
```
### Start
In your own JavaScript Files,you should write this line to active it.
```
$('.timeline').timeLine();
// In this case, it will use default settings.
```
### Options
* number: set how many dots you want
* state: set how many dots are actived

you can warp them like this.
```
var opitions = {
	number:4,
	state:0
}
```
# Now, Enjoy it.