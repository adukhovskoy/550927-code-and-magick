'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var STAT_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var FONT_SIZE = 16;
var WINNER_MESSAGE = ['Ура вы победили!', 'Список результатов:'];

var renderCloud = function (ctx, x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x + width / 20, y + height / 20, width - width / 10, height - height / 10);
  ctx.fillRect(x + width / 10 + 5, y, width - width / 5 - 10, height / 10);
  ctx.fillRect(x, y + height / 10 + 5, width / 10, height - height / 5 - 10);
  ctx.fillRect(x + width / 10 + (width - width / 5), y + height / 10 + 5, width / 10, height - height / 5 - 10);
  ctx.fillRect(x + width / 10 + 5, y + height / 10 + (height - height / 5), width - width / 5 - 10, height / 10);

};

var findMaxTime = function (times) {
  var maxTime = 0;
  for (var i = 0; i < times.length; i++) {
    if (times[i] > maxTime) {
      maxTime = times[i];
    }
  }
  return (maxTime);
};

var renderBar = function (ctx, x, y, barWidth, barHeight, barColor) {
  ctx.fillStyle = barColor;
  ctx.fillRect(x, y, barWidth, barHeight);
};

var renderText = function (ctx, x, y, font, fontSize, textColor, text) {
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = textColor;
  ctx.font = fontSize + 'px ' + font;
  ctx.fillText(text, x, y);
};

window.renderStatistics = function (ctx, names, times) {
  var barScale = STAT_HEIGHT / findMaxTime(times);
  var barColor = 'rgba(255, 0, 0, 1)';
  renderCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, CLOUD_WIDTH, CLOUD_HEIGHT, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT, '#ffffff');

  for (var i = 0; i < WINNER_MESSAGE.length; i++) {
    renderText(ctx, CLOUD_X + BAR_GAP, CLOUD_Y + FONT_SIZE * i, 'PT Mono', FONT_SIZE, '#000000', WINNER_MESSAGE[i]);
  }

  for (var j = 0; j < times.length; j++) {
    var barHeightScaled = Math.floor(times[j] * barScale);
    if (names[j] === 'Вы') {
      barColor = 'rgba(255, 0, 0, 1)';
    } else {
      barColor = 'rgb(0, 0, ' + Math.floor(Math.random() * 255) + ' )';
    }
    renderBar(ctx, CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * j, CLOUD_Y + BAR_GAP + STAT_HEIGHT - barHeightScaled, BAR_WIDTH, barHeightScaled, barColor);
    renderText(ctx, CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * j, CLOUD_Y + BAR_GAP + STAT_HEIGHT - barHeightScaled - FONT_SIZE, 'PT Mono', FONT_SIZE, '#000000', Math.floor(times[j]));
    renderText(ctx, CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * j, CLOUD_Y + BAR_GAP + STAT_HEIGHT + FONT_SIZE, 'PT Mono', FONT_SIZE, '#000000', names[j]);
  }
};
