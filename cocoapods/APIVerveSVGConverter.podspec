Pod::Spec.new do |s|
  s.name             = 'APIVerveSVGConverter'
  s.version          = '1.2.3'
  s.summary          = 'SVG Converter is an SVG to PNG API that transforms vector SVG files into raster image formats.'
  s.description      = <<-'DESC'
SVG Converter is an SVG to PNG API that transforms vector SVG files into raster image formats. Convert SVG logos, icons, and illustrations to PNG, JPG, or WebP for use in applications that don't support vector graphics.

This iOS/macOS SDK provides a convenient way to access the SVG Converter from APIVerve.
Supports both callback-based and async/await patterns.
                       DESC

  s.homepage         = 'https://apiverve.com/marketplace/svgconverter?utm_source=cocoapods&utm_medium=referral&utm_content=homepage'
  s.license          = { :type => 'MIT', :file => 'LICENSE' }
  s.author           = { 'APIVerve' => 'hello@apiverve.com' }
  # The SDK repo holds every language; the pod lives under cocoapods/ with its own tag.
  s.source           = { :git => 'https://github.com/apiverve/svgconverter-api.git', :tag => "cocoapods/v#{s.version}" }

  s.ios.deployment_target = '15.0'
  s.osx.deployment_target = '12.0'

  s.swift_version = '5.0'

  s.source_files = 'cocoapods/Sources/APIVerveSVGConverter/**/*.swift'

  s.frameworks = 'Foundation'

  # APIResponse, APIVerveError and the request plumbing, shared by every APIVerve pod.
  s.dependency 'APIVerveCore', '~> 1.2'
end
