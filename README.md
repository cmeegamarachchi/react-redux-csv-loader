# React-Redux csv loader

Loads local csv file into redux store

![](https://github.com/cmeegamarachchi/react-redux-csv-loader/raw/master/data/diagram.png)

`CSVLoader` is the container where all state related operations lives

`FileSelector` loads and parses csv file and copies results to state by calling `recordsLoaded` passed to it by its parent `CSVLoader`

`RecordViewer` display x number of records passed to it by `CSVLoader`

`.\src\store\types.ts` Defines shape for redux-store

`.\src\store\store.ts` The store

`.\src\store\rootReducer.ts` Main reducer

`.\src\store\reducers.ts` Reducers

`.\src\store\actions.ts` Actions

to build `npm install`

to run `npm run`

Several test data files are located at `.\data`

The MIT License (MIT)
=====================

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the “Software”), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
-
