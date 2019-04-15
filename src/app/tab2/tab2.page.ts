import { Platform } from '@ionic/angular';
import { Component, ViewChild, Renderer } from '@angular/core';

import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  @ViewChild('myCanvas') canvas: any;
  //@ViewChild('label') label: any;

  canvasElement: any;

  ctx;
  ratio;
  i;

  requestAnimationFrame;

  colorBlue = "#55A6B7";
  colorPink = "#EF3FA2";
  colorGreen = "#87B65A";

  constructor(private renderer: Renderer, private platform: Platform,
    public alertController: AlertController) {


  }

  ngOnInit() {
    this.requestAnimationFrame = window.requestAnimationFrame;
    window.addEventListener('devicemotion', (e)=>{
      let acc = e.accelerationIncludingGravity;

    if (acc.y > 0) {
      this.i = acc.y * 2;
      this.requestAnimationFrame(this.drawLines.bind(this));
     }


    //console.log(acc);
    }, false);
  }

  ngAfterViewInit() {
    console.log('in ngAfterViewInit');
    console.log(this.canvas);
    this.canvasElement = this.canvas.nativeElement;
    console.log(this.canvasElement);

    this.renderer.setElementAttribute(this.canvasElement, 'width', this.platform.width() + '');
    this.renderer.setElementAttribute(this.canvasElement, 'height', this.platform.height() + '');

    //console.log(this.label.el.innerHTML);


    this.ctx = this.canvasElement.getContext('2d');

    this.ratio = this.platform.width() / this.platform.height();
    this.ratio > 1 ? this.ratio = 1 : this.ratio = this.ratio;

    this.ctx.fillStyle = "#D6C3B2";
    this.ctx.fillRect(0, 0, this.platform.width(), this.platform.height());

    this.ctx.strokeStyle = "transparent";
    //ctx.shadowBlur = 20;
    this.ctx.shadowColor = "black";
    //ctx.filter = "blur(25px)"; 
    this.ctx.beginPath();
    this.moveToWithRation(71, 332); // left most point of hand
    this.lineToWithRatio(93, 98);
    this.plotBezierCurve(93, 98, 147, 107);


    this.lineToWithRatio(147, 107);
    this.lineToWithRatio(140, 298);
    this.plotBezierCurve(140, 298, 179, 319, false);

    this.lineToWithRatio(179, 319);
    this.lineToWithRatio(263, 22);
    this.plotBezierCurve(263, 22, 320, 39);

    this.lineToWithRatio(320, 39);
    this.lineToWithRatio(256, 297);
    this.plotBezierCurve(256, 297, 279, 304, false);
    this.lineToWithRatio(279, 304);
    this.lineToWithRatio(376, 20);
    this.plotBezierCurve(376, 20, 443, 40);

    this.lineToWithRatio(443, 40);
    this.lineToWithRatio(341, 331);
    this.plotBezierCurve(341, 331, 366, 341, false);
    this.lineToWithRatio(366, 341);
    this.lineToWithRatio(517, 128);
    this.plotBezierCurve(517, 128, 567, 166);

    this.lineToWithRatio(567, 166);
    this.lineToWithRatio(367, 479);
    this.plotBezierCurve(367, 479, 384, 518, false);
    this.lineToWithRatio(384, 518);
    this.lineToWithRatio(505, 417);
    this.plotBezierCurve(505, 417, 561, 482);

    this.lineToWithRatio(561, 482); // second last finger start
    this.lineToWithRatio(416, 560); // second last finger end

    this.lineToWithRatio(325, 588);
    this.lineToWithRatio(148, 585);
    this.lineToWithRatio(180, 517);
    this.ctx.closePath();
    this.ctx.stroke();

    this.ctx.fill();

    this.drawLines();


  }

  handleMotion(e) {


    console.log('motion...');
    let acc = e.accelerationIncludingGravity;

    if (acc.y > 0) {
      this.i = acc.y * 2;
      this.requestAnimationFrame(this.drawLines);
    }else{
      this.requestAnimationFrame(this.drawLines.bind(this));
    }


    console.log(acc);
  }

  /*async presentAlert(event) {
    const alert = await this.alertController.create({
      header: event.accelerationIncludingGravity.x,
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }*/

  handleMove(ev) {
    console.log(ev);
  }





  drawLines() {
    //console.log('drawing...'+ this.i);
    this.ctx.fillStyle = "#D6C3B2";
    this.ctx.clearRect(0, 0, this.platform.width(), this.platform.height());
    this.ctx.fillRect(0, 0, this.platform.width(), this.platform.height());


    this.ctx.shadowBlur = 0;
    this.ctx.strokeStyle = this.colorBlue;
    this.ctx.beginPath();
    this.ctx.lineWidth = 7;
    this.moveToWithRation(11, 5);
    this.lineToWithRatio(1321, 9);
    this.ctx.stroke();

    this.ctx.strokeStyle = this.colorGreen;
    this.ctx.beginPath();
    this.ctx.lineWidth = 3;
    this.moveToWithRation(13, 8);
    this.lineToWithRatio(1292, 23);
    this.ctx.stroke();

    this.ctx.strokeStyle = this.colorPink;
    this.ctx.beginPath();
    this.ctx.lineWidth = 4;
    this.moveToWithRation(13, 15);
    this.lineToWithRatio(1292, 23);
    this.ctx.stroke();


    this.ctx.strokeStyle = this.colorBlue;
    this.ctx.beginPath();
    this.ctx.lineWidth = 7;
    this.moveToWithRation(17, 282);
    this.lineToWithRatio(68, 289);
    this.plotBezierCurve(68, 289, 478, 325);
    this.lineToWithRatio(478, 325);
    this.lineToWithRatio(1316, 386);
    this.ctx.stroke();

    this.ctx.strokeStyle = this.colorGreen;
    this.ctx.beginPath();
    this.ctx.lineWidth = 3;
    this.moveToWithRation(429, 120);
    this.lineToWithRatio(1313, 127);
    this.ctx.stroke();

    this.ctx.strokeStyle = this.colorPink;
    this.ctx.beginPath();
    this.ctx.lineWidth = 4;
    this.moveToWithRation(425, 124);
    this.lineToWithRatio(1292, 126);
    this.ctx.stroke();

    this.ctx.strokeStyle = this.colorGreen;
    this.ctx.beginPath();
    this.ctx.lineWidth = 3;
    this.moveToWithRation(25, 90);
    this.lineToWithRatio(236, 102);
    this.ctx.stroke();

    this.ctx.strokeStyle = this.colorPink;
    this.ctx.beginPath();
    this.ctx.lineWidth = 4;
    this.moveToWithRation(32, 99);
    this.lineToWithRatio(233, 106);
    this.ctx.stroke();


    this.ctx.strokeStyle = this.colorBlue;


    //ctx.shadowColor = "black";
    this.ctx.beginPath();
    this.ctx.lineWidth = 7;
    this.moveToWithRation(9, 182);
    this.lineToWithRatio(92, 187);
    this.plotBezierCurve(92, 187, 153, 191);
    //this.ctx.bezierCurveTo(92-12,187-20,153, 187-20,153, 191);

    this.lineToWithRatio(153, 191);
    this.lineToWithRatio(223, 191);
    this.plotBezierCurve(223, 191, 294, 187);
    //this.ctx.bezierCurveTo(223-12,191-20,294, 191-20,294, 187);

    this.lineToWithRatio(294, 187);
    this.lineToWithRatio(326, 192);
    this.plotBezierCurve(326, 192, 404, 187);
    this.lineToWithRatio(404, 187);
    this.lineToWithRatio(476, 197);
    this.plotBezierCurve(476, 197, 558, 205);
    this.lineToWithRatio(558, 205);
    this.lineToWithRatio(1341, 240);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.strokeStyle = this.colorPink;
    this.ctx.lineWidth = 3;
    this.moveToWithRation(14, 245);
    this.lineToWithRatio(84, 253);
    this.plotBezierCurve(84, 253, 153, 254);
    this.lineToWithRatio(153, 254);
    this.lineToWithRatio(202, 258);
    this.plotBezierCurve(202, 258, 278, 264);
    this.lineToWithRatio(278, 264);
    this.lineToWithRatio(297, 274);
    this.plotBezierCurve(297, 274, 367, 292);
    this.lineToWithRatio(367, 292);
    this.lineToWithRatio(410, 292);
    this.plotBezierCurve(410, 292, 490, 314);
    this.lineToWithRatio(490, 314);
    this.lineToWithRatio(1341, 389);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.strokeStyle = this.colorGreen;
    //this.ctx.strokeStyle = "";
    this.moveToWithRation(13, 213);
    this.lineToWithRatio(85, 222);
    this.plotBezierCurve(85, 222, 154, 230);
    this.lineToWithRatio(154, 230);
    this.lineToWithRatio(205, 234);
    this.plotBezierCurve(205, 234, 286, 238);
    this.lineToWithRatio(286, 238);
    this.lineToWithRatio(306, 241);
    this.plotBezierCurve(306, 241, 381, 247);
    this.lineToWithRatio(381, 247);
    this.lineToWithRatio(425, 254);
    this.plotBezierCurve(425, 254, 517, 272);
    this.lineToWithRatio(517, 272);
    this.lineToWithRatio(1340, 327);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.strokeStyle = this.colorBlue;
    this.ctx.lineWidth = 7;
    this.moveToWithRation(14, 334);
    this.lineToWithRatio(77, 339);
    this.plotBezierCurve(77, 339, 459, 365);
    this.lineToWithRatio(459, 365);
    this.lineToWithRatio(1344, 436);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.strokeStyle = this.colorGreen;
    this.ctx.lineWidth = 3;
    this.moveToWithRation(10, 345);
    this.lineToWithRatio(80, 352);
    this.plotBezierCurve(80, 352, 452, 372);
    this.lineToWithRatio(452, 372);
    this.lineToWithRatio(1344, 452);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.strokeStyle = this.colorPink;
    this.moveToWithRation(13, 379);
    this.lineToWithRatio(98, 381);
    this.plotBezierCurve(98, 381, 431, 408);
    this.lineToWithRatio(431, 408);
    this.lineToWithRatio(1343, 475);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.strokeStyle = this.colorBlue;
    this.ctx.lineWidth = 7;
    this.moveToWithRation(13, 464);
    this.lineToWithRatio(152, 472);
    this.plotBezierCurve(152, 472, 381, 480);
    this.lineToWithRatio(381, 480);
    this.lineToWithRatio(436, 486);
    this.plotBezierCurve(436, 486, 529, 514);
    this.lineToWithRatio(529, 514);
    this.lineToWithRatio(1345, 550);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.strokeStyle = this.colorGreen;
    this.ctx.lineWidth = 3;
    this.moveToWithRation(17, 494);
    this.lineToWithRatio(169, 504);
    this.plotBezierCurve(169, 504, 381, 503);
    this.lineToWithRatio(381, 503);
    this.lineToWithRatio(403, 507);
    this.plotBezierCurve(403, 507, 488, 538);
    this.lineToWithRatio(488, 538);
    this.lineToWithRatio(1343, 572);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.strokeStyle = this.colorPink;
    this.moveToWithRation(18, 537);
    this.lineToWithRatio(174, 542);
    this.plotBezierCurve(174, 542, 436, 562);
    this.lineToWithRatio(436, 562);
    this.lineToWithRatio(1343, 590);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.strokeStyle = this.colorBlue;
    this.ctx.lineWidth = 7;
    this.moveToWithRation(9, 25);
    this.lineToWithRatio(269 - 12, 30);
    this.plotBezierCurve(269, 30, 332, 43);
    this.lineToWithRatio(332, 43);
    this.lineToWithRatio(375, 43);
    this.plotBezierCurve(375, 43, 454, 46);
    this.lineToWithRatio(454, 46);
    this.lineToWithRatio(1343, 43);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.strokeStyle = this.colorGreen;
    this.ctx.lineWidth = 3;
    this.moveToWithRation(16, 54);
    this.lineToWithRatio(257, 63);
    this.plotBezierCurve(257, 63, 324, 75);
    this.lineToWithRatio(324, 75);
    this.lineToWithRatio(360, 81);
    this.plotBezierCurve(360, 81, 442, 85);
    this.lineToWithRatio(442, 85);
    this.lineToWithRatio(1343, 79);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.strokeStyle = this.colorPink;
    this.moveToWithRation(21, 76);
    this.lineToWithRatio(250, 83);
    this.plotBezierCurve(250, 83, 319, 97);
    this.lineToWithRatio(319, 97);
    this.lineToWithRatio(352, 101);
    this.plotBezierCurve(352, 101, 431, 109);
    this.lineToWithRatio(431, 109);
    this.lineToWithRatio(1345, 113);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.strokeStyle = this.colorBlue;
    this.ctx.lineWidth = 7;
    this.moveToWithRation(18, 117);
    this.lineToWithRatio(94, 128);
    this.plotBezierCurve(94, 128, 157, 130);
    this.lineToWithRatio(157, 130);
    this.lineToWithRatio(234, 133);
    this.plotBezierCurve(234, 133, 312, 129);
    this.lineToWithRatio(312, 129);
    this.lineToWithRatio(340, 134);
    this.plotBezierCurve(340, 134, 420, 147);
    this.lineToWithRatio(420, 147);
    this.lineToWithRatio(510, 146);
    this.plotBezierCurve(510, 146, 576, 157);
    this.lineToWithRatio(576, 157);
    this.lineToWithRatio(1340, 172);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.strokeStyle = this.colorGreen;
    this.ctx.lineWidth = 3;
    this.moveToWithRation(16, 145);
    this.lineToWithRatio(93, 155);
    this.plotBezierCurve(93, 155, 154, 157);
    this.lineToWithRatio(154, 157);
    this.lineToWithRatio(228, 161);
    this.plotBezierCurve(228, 161, 302, 165);
    this.lineToWithRatio(302, 165);
    this.lineToWithRatio(331, 166);
    this.plotBezierCurve(331, 166, 410, 169);
    this.lineToWithRatio(410, 169);
    this.lineToWithRatio(490, 173);
    this.plotBezierCurve(490, 173, 569, 185);
    this.lineToWithRatio(569, 185);
    this.lineToWithRatio(1346, 207);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.strokeStyle = this.colorPink;
    this.ctx.lineWidth = 3;
    this.moveToWithRation(19, 167);
    this.lineToWithRatio(90, 171);
    this.plotBezierCurve(90, 171, 155, 173);
    this.lineToWithRatio(155, 173);
    this.lineToWithRatio(223, 177);
    this.plotBezierCurve(223, 177, 298, 177);
    this.lineToWithRatio(298, 177);
    this.lineToWithRatio(327, 181);
    this.plotBezierCurve(327, 181, 405, 181);
    this.lineToWithRatio(405, 181);
    this.lineToWithRatio(479, 185);
    this.plotBezierCurve(479, 185, 567, 197);
    this.lineToWithRatio(567, 197);
    this.lineToWithRatio(1346, 228);
    this.ctx.stroke();



    this.ctx.beginPath();
    this.ctx.strokeStyle = this.colorBlue;
    this.ctx.lineWidth = 7;
    this.moveToWithRation(21, 421);
    this.lineToWithRatio(121, 427);
    this.plotBezierCurve(121, 427, 410, 440);
    this.lineToWithRatio(410, 440);
    this.lineToWithRatio(473, 450);
    this.plotBezierCurve(473, 450, 568, 470);
    this.lineToWithRatio(568, 470);
    this.lineToWithRatio(1345, 520);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.strokeStyle = this.colorGreen;
    this.ctx.lineWidth = 3;
    this.moveToWithRation(26, 434);
    this.lineToWithRatio(133, 446);
    this.plotBezierCurve(133, 446, 405, 446);
    this.lineToWithRatio(405, 446);
    this.lineToWithRatio(456, 464);
    this.plotBezierCurve(456, 464, 570, 486);
    this.lineToWithRatio(570, 486);
    this.lineToWithRatio(1342, 536);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.strokeStyle = this.colorPink;
    this.ctx.lineWidth = 3;
    this.moveToWithRation(31, 447);
    this.lineToWithRatio(143, 460);
    this.plotBezierCurve(143, 460, 399, 456);
    this.lineToWithRatio(399, 456);
    this.lineToWithRatio(444, 474);
    this.plotBezierCurve(444, 474, 563, 496);
    this.lineToWithRatio(563, 496);
    this.lineToWithRatio(1345, 545);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.strokeStyle = this.colorGreen;
    this.ctx.lineWidth = 6;
    this.moveToWithRation(315, 350);
    this.lineToWithRatio(350, 352);

    this.lineToWithRatio(369, 353);
    this.plotBezierCurve(369, 353, 450, 370);
    this.lineToWithRatio(450, 370);
    this.ctx.stroke();

  }

  plotBezierCurve(x1, y1, x2, y2, upwards = true) {
    // bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y);
    if (upwards) {
      this.ctx.bezierCurveTo(
        (x1 - 12) * this.ratio,
        (y1 - 20) * this.ratio - this.i,
        x2 * this.ratio,
        (y1 - 20) * this.ratio - this.i,
        x2 * this.ratio,
        y2 * this.ratio
      );
    } else {
      this.ctx.bezierCurveTo(
        x1 * this.ratio,
        (y1 + 20) * this.ratio - this.i,
        x2 * this.ratio,
        (y1 + 20) * this.ratio - this.i,
        x2 * this.ratio,
        y2 * this.ratio
      );
    }

  }

  moveToWithRation(x, y) {
    this.ctx.moveTo((x) * this.ratio, y * this.ratio);
  }

  lineToWithRatio(x, y) {
    this.ctx.lineTo((x) * this.ratio, y * this.ratio);
  }
}
