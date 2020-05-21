function isTakeoff(line) {
    return line === "takeoff";
}

function isLand(line) {
    return line === "land";
}

function isEmergency(line) {
    return line.startsWith("emerg");
}

function isForward(line) {
    return line.startsWith("forward");
}

function isForwardX(line) {
    return line.startsWith("fX");
}

function isBack(line) {
    return line.startsWith("back");
}

function isBackX(line) {
    return line.startsWith("bX");
}

function isLeft(line) {
    return line.startsWith("left");
}

function isCw(line) {
    return line.startsWith("cw");
}

function isCcw(line) {
    return line.startsWith("ccw");
}

function isRight(line) {
    return line.startsWith("right");
}

function isBattery(line) {
    return line === "battery";
}

function isFlip(line) {
    return line === "flip";
}

class CommandParser {
    constructor(config) {
        this.parseCommand = function parseCommand(line) {
            if (isTakeoff(line)) {
                config.onTakeoff();
                return true;
            }
            if (isLand(line)) {
                config.onLand();
                return true;
            }
            if (isEmergency(line)) {
                config.onEmergency();
                return true;
            }
            if (isForward(line)) {
                const [, dist] = line.split(" ");
                config.onForward(dist);
                return true;
            }
            if (isForwardX(line)) {
                const [, dist] = line.split(" ");
                config.onForwardX(dist);
                return true;
            }
            if (isBack(line)) {
                const [, dist] = line.split(" ");
                config.onBack(dist);
                return true;
            }
            if (isBackX(line)) {
                const [, dist] = line.split(" ");
                config.onBackX(dist);
                return true;
            }
            if (isRight(line)) {
                const [, dist] = line.split(" ");
                config.onRight(dist);
                return true;
            }
            if (isCw(line)) {
                const [, dist] = line.split(" ");
                config.onCw(dist);
                return true;
            }
            if (isCcw(line)) {
                const [, dist] = line.split(" ");
                config.onCCw(dist);
                return true;
            }
            if (isLeft(line)) {
                const [, dist] = line.split(" ");
                config.onLeft(dist);
                return true;
            }
            if (isBattery(line)) {
                config.onBattery(line);
                return true;
            }
            if (isFlip(line)) {
                config.onFlip(line);
                return true;
            }
            return false;
        };
    }
}

module.exports = CommandParser;
