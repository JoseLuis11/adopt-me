/*Instructions:
Given a list of rectangular buildings with a start, end, and height; return the minimal list of co-ordinates in the correct order to draw a silhouette (i.e. the image of the scene as a black solid shape with its edges matching the outline of the buildings) of the skyline produced by the composition of all the buildings and the horizon. You may assume all buildings have positive, non-zero, integer values for width and height. Behind the buildings there is a horizontal horizon at a height of 5. Any building lower than this will not show up in the skyline.

Hint: You may find it helpful to construct an array representing the height of the skyline at all integer points from the start of the first building to end of the last. Set the height to 5 if it is less than 5.

Partial credit is given for solutions which do one or more of the following:

Returns a zero-length array of co-ordinates when a zero-length array of building objects is provided as input
Calculates the skyline correctly for a single building
Calculates the skyline correctly for two buildings which do not overlap
Calculates the skyline correctly for three or more buildings which may overlap
Handles the effect of the horizon correctly by ignoring buildings lower than it
Full credit is awarded for a solution which correctly adheres to all task requirements.
Input: Array of buildings

Example Input: given three buildings as follows:

building1 = new Building(3,5,40)

building2 = new Building(4,6,20)

building3 = new Building(5,7,4)

Output: Array of points to draw silhouette

Expected Output: [(3, 5), (3, 40), (5, 40), (5, 20), (6, 20), (6, 5), (7, 5)]

Important Information:

Do not modify names of any classes or methods provided as skeleton implementation
Do not change signature of method skyline*/


function skyline(buildings) {
    //it should be something like (start, horizonHeight), (start, height), (end, height), (end, nextHeight)
    let coordinates = [];
    let horizonHeight = 5;
    
    buildings.forEach((building, index) => {
      if (index === 0) {
        coordinates.push([building.start, horizonHeight]);
      }
      coordinates.push([building.start, building.height]);
      coordinates.push([building.end, building.height]);
      if (index === buildings.length - 1) {
        coordinates.push([building.end, horizonHeight]);
      }
    });
    return coordinates;
    
    // buildings is a list of buildings, which are objects with start, end, and
    // height properties.
    
    // You may assume all buildings have a positive (non-zero) width and height.
    // Hint: You may find it helpful to construct an array representing the height of the
    // skyline at all points from the start of the first building to end of the last.

    // You should return a list of points, where points are a 2-element array of x and y coordinate like [x, y].
};

exports.skyline = skyline;

if (require.main === module) {
    buildings = [{start: 1, end: 2, height: 5}]
    console.log("Skyline is", skyline(buildings));
}
