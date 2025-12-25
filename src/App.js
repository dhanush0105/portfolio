import React from 'react';

function App() {
  return (
    <div className="h-screen bg-gradient-to-br from-teal-50 to-emerald-50 overflow-hidden">
      {/* Main Content */}
      <div className="h-full flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm py-6">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-teal-600">Dhanush M</h1>
              <p className="text-gray-600 mt-1">Computer Science Student | New to Coding</p>
            </div>
          </div>
        </header>

        {/* Content Grid */}
        <div className="flex-1 p-6">
          <div className="max-w-7xl mx-auto h-full grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Left Column - About */}
            <div className="bg-white rounded-xl p-6 shadow-sm h-fit">
              <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">About Me</h2>
              <div className="space-y-4">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-teal-600 mb-2">New to Coding Journey</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    I am a Computer Science student at <strong>SKCET</strong>, currently pursuing an 
                    <strong> M.Tech CSE 5-Year Integrated Course</strong>. 
                    I am new to coding and excited to explore Web Development, problem solving, and build real-world projects.
                  </p>
                </div>
                
                <div className="bg-teal-50 rounded-lg p-4">
                  <div className="grid grid-cols-1 gap-3">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-sm text-gray-700">Status:</span>
                      <span className="text-sm text-teal-600">Learning Every Day</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-sm text-gray-700">Focus:</span>
                      <span className="text-sm text-teal-600">Web Development</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-sm text-gray-700">Goal:</span>
                      <span className="text-sm text-teal-600">Build Cool Projects</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Column - Skills & Learning */}
            <div className="space-y-6">
              {/* Skills */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">Learning Path</h2>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-teal-600 mb-3 text-center">Currently Learning</h4>
                    <div className="flex flex-wrap justify-center gap-2">
                      <span className="bg-teal-100 text-teal-700 px-3 py-2 rounded-full text-sm font-medium">HTML</span>
                      <span className="bg-teal-100 text-teal-700 px-3 py-2 rounded-full text-sm font-medium">CSS</span>
                      <span className="bg-teal-100 text-teal-700 px-3 py-2 rounded-full text-sm font-medium">JavaScript</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-emerald-600 mb-3 text-center">Want to Learn</h4>
                    <div className="flex flex-wrap justify-center gap-2">
                      <span className="bg-emerald-100 text-emerald-700 px-3 py-2 rounded-full text-sm font-medium">React</span>
                      <span className="bg-emerald-100 text-emerald-700 px-3 py-2 rounded-full text-sm font-medium">Python</span>
                      <span className="bg-emerald-100 text-emerald-700 px-3 py-2 rounded-full text-sm font-medium">Node.js</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tools */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">Tools I Use</h2>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="bg-cyan-100 text-cyan-700 px-3 py-2 rounded-full text-sm font-medium">VS Code</span>
                  <span className="bg-cyan-100 text-cyan-700 px-3 py-2 rounded-full text-sm font-medium">Chrome DevTools</span>
                  <span className="bg-cyan-100 text-cyan-700 px-3 py-2 rounded-full text-sm font-medium">YouTube Tutorials</span>
                </div>
              </div>
            </div>

            {/* Right Column - Projects & Contact */}
            <div className="space-y-6">
              {/* Projects */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">My Projects</h2>
                <div className="space-y-4">
                  <div className="bg-teal-50 rounded-lg p-4 border-l-4 border-teal-500">
                    <h4 className="font-semibold text-gray-800 mb-1">Portfolio Website</h4>
                    <p className="text-gray-600 text-sm">My first website!</p>
                  </div>
                  <div className="bg-emerald-50 rounded-lg p-4 border-l-4 border-emerald-500">
                    <h4 className="font-semibold text-gray-800 mb-1">Tea Counter</h4>
                    <p className="text-gray-600 text-sm">Built with HTML & CSS</p>
                  </div>
                  <div className="bg-cyan-50 rounded-lg p-4 border-l-4 border-cyan-500">
                    <h4 className="font-semibold text-gray-800 mb-1">Future Goals</h4>
                    <p className="text-gray-600 text-sm">Mobile apps and web applications</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-white py-4 border-t">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-gray-500 text-sm">My first website, still learning and growing!</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;