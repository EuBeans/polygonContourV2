# PolygonContour V2
#### Algorithm for implementing the edge effect offset

Check out the Demo here: <https://polygon-contour-v2.herokuapp.com/>

The code is a modified version of the V1 Polygon Contour Algorithm that generates a a contour around the a list of points by the given distance. The code is written in a way that it can be used as a module in other programs. The algorithm uses a different approach on generating the points of the contours and it is coded using Typescript.

## Features
- Now using React Konvas to display the points and lines
- Generates a List of points that will contour your segments
- Drag Points and see the updated contour
- Alter the distance of the padding between the segments and the contour
- Alter the radius of sharp angles

## Few Examples

![Segments with Complex Angles](/img/Example1.png)


![Segments with Complex Angles](/img/Example2.png)

![Segments with Complex Angles](/img/Example3.gif)


## Sources
<https://mcmains.me.berkeley.edu/pubs/DAC05OffsetPolygon.pdf>
<https://stackoverflow.com/questions/24771828/how-to-calculate-rounded-corners-for-a-polygon>
<https://gorillasun.de/blog/an-algorithm-for-polygons-with-rounded-corners>
<https://dl.acm.org/doi/pdf/10.1145/129902.129906>
<https://doc.cgal.org/Manual/3.2/doc_html/cgal_manual/Straight_skeleton_2/Chapter_main.html#Section_16.3>




<https://github.com/Stanko/offset-polygon/blob/main/src/offset-polygon.ts>
