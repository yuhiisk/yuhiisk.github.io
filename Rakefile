desc 'setup'
task :setup do
  sh 'rm -rf  _deploy'
  sh 'git clone git@github.com:yuhiisk/yuhiisk.github.io.git _deploy'
  cd '_deploy' do
    sh 'git checkout gh-pages'
  end
end

desc 'deploy to production'
task :deploy do
  sh 'jekyll build'
  sh 'rm -rf _deploy/*'
  sh 'cp -R _site/* _deploy'
  cd '_deploy' do
    sh 'git add -A'
    sh 'git commit -v'
    sh 'git push origin master'
  end
end

desc 'create new post'
task :post do
  require 'date'
  content = <<EOF
---
layout: posts
title: 
category: 
---
EOF
  print 'title: '
  title = STDIN.gets.strip

  filepath = "src/_posts/#{Date.today.to_s}-#{title}.md"

  raise "#{filepath} is exists" if File.exist?(filepath)

  File.write(filepath, content)
  puts "create #{filepath}"
end

desc 'run dev server'
task 'server' do
  sh 'jekyll serve -w'
end
