var MusicLab = (function (exports) {
'use strict';

// External Imports: Tone.js

/**
 * Provides an interface with Tone.js
 */
function Synthesizer() {
    this.synth = new Tone.Synth().toMaster();
}

Synthesizer.prototype.test = function() {
    let _self = this;
    let loop_0 = function(time) {
        _self.synth.triggerAttackRelease("C4", "4n", time + 0);
        _self.synth.triggerAttackRelease("Eb4", "4n", time + 0.5);
        _self.synth.triggerAttackRelease("G4", "4n", time + 1);
        _self.synth.triggerAttackRelease("Bb4", "4n", time + 1.5); 
        _self.synth.triggerAttackRelease("C4", "4n", time + 2);
        _self.synth.triggerAttackRelease("Eb4", "4n", time + 2.5);
        _self.synth.triggerAttackRelease("G4", "4n", time + 3);
        _self.synth.triggerAttackRelease("Bb4", "4n", time + 3.5); 
    };

    Tone.Transport.schedule(loop_0, 0);
    Tone.Transport.loopEnd = '1m';
    Tone.Transport.loop = true;

    Tone.Transport.start();
};

exports.Synthesizer = Synthesizer;

return exports;

}({}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXVzaWNMYWIuanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL2F1ZGlvL1N5bnRoZXNpemVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4dGVybmFsIEltcG9ydHM6IFRvbmUuanNcclxuXHJcbi8qKlxyXG4gKiBQcm92aWRlcyBhbiBpbnRlcmZhY2Ugd2l0aCBUb25lLmpzXHJcbiAqL1xyXG5mdW5jdGlvbiBTeW50aGVzaXplcigpIHtcclxuICAgIHRoaXMuc3ludGggPSBuZXcgVG9uZS5TeW50aCgpLnRvTWFzdGVyKCk7XHJcbn1cclxuXHJcblN5bnRoZXNpemVyLnByb3RvdHlwZS50ZXN0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICBsZXQgX3NlbGYgPSB0aGlzO1xyXG4gICAgbGV0IGxvb3BfMCA9IGZ1bmN0aW9uKHRpbWUpIHtcclxuICAgICAgICBfc2VsZi5zeW50aC50cmlnZ2VyQXR0YWNrUmVsZWFzZShcIkM0XCIsIFwiNG5cIiwgdGltZSArIDApO1xyXG4gICAgICAgIF9zZWxmLnN5bnRoLnRyaWdnZXJBdHRhY2tSZWxlYXNlKFwiRWI0XCIsIFwiNG5cIiwgdGltZSArIDAuNSk7XHJcbiAgICAgICAgX3NlbGYuc3ludGgudHJpZ2dlckF0dGFja1JlbGVhc2UoXCJHNFwiLCBcIjRuXCIsIHRpbWUgKyAxKTtcclxuICAgICAgICBfc2VsZi5zeW50aC50cmlnZ2VyQXR0YWNrUmVsZWFzZShcIkJiNFwiLCBcIjRuXCIsIHRpbWUgKyAxLjUpOyBcclxuICAgICAgICBfc2VsZi5zeW50aC50cmlnZ2VyQXR0YWNrUmVsZWFzZShcIkM0XCIsIFwiNG5cIiwgdGltZSArIDIpO1xyXG4gICAgICAgIF9zZWxmLnN5bnRoLnRyaWdnZXJBdHRhY2tSZWxlYXNlKFwiRWI0XCIsIFwiNG5cIiwgdGltZSArIDIuNSk7XHJcbiAgICAgICAgX3NlbGYuc3ludGgudHJpZ2dlckF0dGFja1JlbGVhc2UoXCJHNFwiLCBcIjRuXCIsIHRpbWUgKyAzKTtcclxuICAgICAgICBfc2VsZi5zeW50aC50cmlnZ2VyQXR0YWNrUmVsZWFzZShcIkJiNFwiLCBcIjRuXCIsIHRpbWUgKyAzLjUpOyBcclxuICAgIH1cclxuXHJcbiAgICBUb25lLlRyYW5zcG9ydC5zY2hlZHVsZShsb29wXzAsIDApO1xyXG4gICAgVG9uZS5UcmFuc3BvcnQubG9vcEVuZCA9ICcxbSc7XHJcbiAgICBUb25lLlRyYW5zcG9ydC5sb29wID0gdHJ1ZTtcclxuXHJcbiAgICBUb25lLlRyYW5zcG9ydC5zdGFydCgpO1xyXG59XHJcblxyXG5leHBvcnQgeyBTeW50aGVzaXplciB9OyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTs7Ozs7QUFLQSxTQUFTLFdBQVcsR0FBRztJQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0NBQzVDOztBQUVELFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLFdBQVc7SUFDcEMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ2pCLElBQUksTUFBTSxHQUFHLFNBQVMsSUFBSSxFQUFFO1FBQ3hCLEtBQUssQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkQsS0FBSyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztRQUMxRCxLQUFLLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELEtBQUssQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDMUQsS0FBSyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN2RCxLQUFLLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQzFELEtBQUssQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkQsS0FBSyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztNQUM3RDs7SUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQzs7SUFFM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztDQUMxQjs7Ozs7Ozs7OzsifQ==