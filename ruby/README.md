# SVG Converter API - Ruby Gem

SVG Converter is an SVG to PNG API that transforms vector SVG files into raster image formats. Convert SVG logos, icons, and illustrations to PNG, JPG, or WebP for use in applications that don't support vector graphics.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_svgconverter'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_svgconverter
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_svgconverter'

# Initialize the client
client = APIVerve::Svgconverter::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute({
  image: "",
  outputFormat: "png",
  quality: 90,
  maxWidth: 1920,
  maxHeight: 1080
})

# Print the response
puts response
```

### File Upload

```ruby
# Upload a file
response = client.execute_with_file("/path/to/file.jpg")

# Or use a URL
response = client.execute_with_url("https://example.com/image.jpg")
```

### Error Handling

```ruby
begin
  response = client.execute({ outputFormat: "png" })
  puts response["data"]
rescue APIVerve::Svgconverter::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Svgconverter::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Svgconverter::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
```

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "id": "a1b2c3d4-5678-90ab-cdef-1234567890ab",
    "inputFormat": "svg",
    "outputFormat": "png",
    "inputSize": 12456,
    "outputSize": 89012,
    "mimeType": "image/png",
    "expires": 1707350400000,
    "downloadURL": "https://storage.googleapis.com/apiverve/svgconverter/a1b2c3d4.png"
  },
  "code": 200
}
```

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/svgconverter?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/svgconverter?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/svgconverter?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
