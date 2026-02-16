from setuptools import setup, find_packages

setup(
    name='apiverve_svgconverter',
    version='1.1.14',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='SVG Converter transforms vector SVG files into raster image formats. Convert SVG logos, icons, and illustrations to PNG, JPG, or WebP for use in applications that don't support vector graphics.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com/marketplace/svgconverter?utm_source=pypi&utm_medium=homepage',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
