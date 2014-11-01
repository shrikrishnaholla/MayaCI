MayaCI
======


[MayaCI](http://shrikrishnaholla.in/MayaCI) is a continuous integration server utilizing git hooks to build applications in Docker containers. It is named after [Mayāsura](http://en.wikipedia.org/wiki/Mayasura), a king of ancient times who was considered a great architect.

![Srikrishna instructing Mayasura to build a palace for Pandavas](http://upload.wikimedia.org/wikipedia/commons/e/e0/Krishna_orders_Mayasura_to_build_a_palace_for_the_Pandavas.jpg)

Goal
----
The goal of the project is to achieve the following  
- Use [git hooks](http://git-scm.com/book/en/Customizing-Git-Git-Hooks) to automatically test builds on commit/merge/rebase
- Use [Docker](http://docker.io) to run the build script in a container
- Run test script in the container. If tests pass, allow to download the image as tarball or push the container image either to the [public index](http://index.docker.io) or a private index
- Give a dashboard to configure/analyze builds
- Allow adding customized plugins

License
-------
The MIT License (MIT)

Copyright (c) 2014 Shrikrishna Holla

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
