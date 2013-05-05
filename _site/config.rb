# Require any additional compass plugins here.

# Set this to the root of your project when deployed:
http_path = "/"
css_dir = "css"
sass_dir = "css/_sass"
images_dir = "img"
javascripts_dir = "js"
fonts_dir = "fonts"

output_style = :expanded

relative_assets = true

line_comments = false
color_output = false

sass_options = {:cache => false, :cache_location => "sass/.sass-cache"}

# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass
preferred_syntax = :scss
