// 2751. Robot Collisions
// There are n 1-indexed robots, each having a position on a line, health, and movement direction.

// You are given 0-indexed integer arrays positions, healths, and a string directions (directions[i] is either 'L' for left or 'R' for right). 
// All integers in positions are unique.

// All robots start moving on the line simultaneously at the same speed in their given directions. 
// If two robots ever share the same position while moving, they will collide.

// If two robots collide, the robot with lower health is removed from the line, and the health of the other robot decreases by one. 
// The surviving robot continues in the same direction it was going. If both robots have the same health, they are both removed from the line.

// Your task is to determine the health of the robots that survive the collisions, in the same order that the robots were given, i.e. final heath of robot 1 (if survived), final health of robot 2 (if survived), and so on. 
// If there are no survivors, return an empty array.

// Return an array containing the health of the remaining robots (in the order they were given in the input), after no further collisions can occur.

// Note: The positions may be unsorted.



var survivedRobotsHealths = function (positions, healths, directions) {
        let robots = new Array(positions.length).fill().map((_, i) => i);
        robots.sort((a, b) => positions[a] - positions[b]);
    
        let stack = [];
        for (let i of robots) {
            if (directions[i] === 'L') {
                while (stack.length && healths[stack[stack.length - 1]] < healths[i]) {
                    healths[stack.pop()] = 0;
                    healths[i]--;
                }
                if (stack.length) {
                    healths[stack[stack.length - 1]] === healths[i] ? healths[stack.pop()] = 0 : healths[stack[stack.length - 1]]--;
                    healths[i] = 0;
                }
            } else {
                stack.push(i);
            }
        }
    
        return healths.filter(h => h !== 0);
    };