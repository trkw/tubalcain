serve 'cd dist && python -m http.server 3333'
port 3333

window_width [340,  768,  1280,  1920]

before_build {
  run 'ndenv global v5.12.0'
  run 'ndenv rehash'
  run 'npm install'
  run 'npm run build'
}

task(:anonymous) {
  entry_point ['/']
  exclude_paths ['/posts', /.*#.*/]
}
