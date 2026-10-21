# SVG Converter API - PHP Package

SVG Converter is an SVG to PNG API that transforms vector SVG files into raster image formats. Convert SVG logos, icons, and illustrations to PNG, JPG, or WebP for use in applications that don't support vector graphics.

## Installation

Install via Composer:

```bash
composer require apiverve/svgconverter
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```php
<?php

require_once 'vendor/autoload.php';

use APIVerve\Svgconverter\Client;

// Initialize the client
$client = new Client('YOUR_API_KEY');

// Make a request
$response = $client->execute([
    'image' => '',
    'outputFormat' => 'png',
    'quality' => 90,
    'maxWidth' => 1920,
    'maxHeight' => 1080
]);

// Print the response
print_r($response);
```

### File Upload

```php
// Upload a file
$response = $client->executeWithFile('/path/to/file.jpg');

// Or use a URL
$response = $client->executeWithUrl('https://example.com/image.jpg');
```

### Error Handling

```php
use APIVerve\Svgconverter\Client;
use APIVerve\Svgconverter\Exceptions\APIException;
use APIVerve\Svgconverter\Exceptions\ValidationException;

try {
    $response = $client->execute(['outputFormat' => 'png']);
    print_r($response['data']);
} catch (ValidationException $e) {
    echo "Validation error: " . implode(', ', $e->getErrors());
} catch (APIException $e) {
    echo "API error: " . $e->getMessage();
    echo "Status code: " . $e->getStatusCode();
}
```

### Debug Mode

```php
// Enable debug logging
$client = new Client(
    apiKey: 'YOUR_API_KEY',
    debug: true
);
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

## Requirements

- PHP 7.4 or higher
- Guzzle HTTP client

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/svgconverter?utm_source=packagist&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/svgconverter?utm_source=php&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/svgconverter?utm_source=php&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This package is available under the [MIT License](LICENSE).
