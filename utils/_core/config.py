#
# The XBUILD configuration file.
#
# (c) 2012 The XTK Developers <dev@goXTK.com>
#

import os
import sys
import tempfile


# STRINGS
SOFTWARE = 'The X Toolkit 2'
SOFTWARE_SHORT = 'X2'
SOFTWARE_DESCRIPTION = 'XTK is a WebGL framework providing an easy-to-use API to visualize scientific data on the web.<br>No background or knowledge in Computer Graphics is required.'
SOFTWARE_HOMEPAGE = 'http://goXTK.com'

NAMESPACE = 'X'

LICENSE_HEADER = '''/*
 * (c) XTK Devs 2013
 */'''


# PATHS
EXCLUDES_PATH = ['lib', 'testing', 'deps', 'utils']
INCLUDES_PATH = []  # force inclusion of sub folders in an excluded directory for dependency generation

REPOSITORY_URL = 'https://github.com/xtk/X2/blob/master/'

CDASH_SUBMIT_URL = 'http://x.babymri.org/cdash/submit.php?project=' + SOFTWARE_SHORT

XBUILD_PATH = os.path.abspath( os.path.dirname( sys.argv[0] ) )
SOFTWARE_PATH = os.path.normpath( XBUILD_PATH + os.sep + '..' + os.sep )

CLOSURELIBRARY_PATH = os.path.normpath( os.path.join( SOFTWARE_PATH, 'lib/google-closure-library/closure/' ) )
CLOSURELIBRARY_DEPS_PATH = os.path.normpath( os.path.join( CLOSURELIBRARY_PATH, 'goog/deps.js' ) )
CLOSURELIBRARY_PYTHON_PATH = os.path.normpath( os.path.join( CLOSURELIBRARY_PATH, 'bin/build/' ) )
CLOSUREBUILDER_PATH = os.path.normpath( os.path.join( CLOSURELIBRARY_PYTHON_PATH, 'closurebuilder.py' ) )
CLOSUREDEPSWRITER_PATH = os.path.normpath( os.path.join( CLOSURELIBRARY_PYTHON_PATH, 'depswriter.py' ) )
CLOSURECOMPILER_PATH = os.path.normpath( os.path.join( SOFTWARE_PATH, 'lib/google-closure-compiler/compiler.jar' ) )
CLOSUREGOOGBASE_PATH = os.path.normpath( os.path.join( CLOSURELIBRARY_PATH, 'goog/base.js' ) )

DOC_TEMPLATES_PATH = os.path.normpath( os.path.join( XBUILD_PATH, '_core', 'templates/' ) )

BUILD_OUTPUT_PATH = os.path.normpath( os.path.join( XBUILD_PATH , SOFTWARE_SHORT.lower() + '.js' ) )
DEPS_OUTPUT_PATH = os.path.normpath( os.path.join( SOFTWARE_PATH , SOFTWARE_SHORT.lower() + '-deps.js' ) )
DOC_OUTPUT_PATH = os.path.normpath( os.path.join( SOFTWARE_PATH , 'doc/' ) )

UNIT_TESTS = os.path.normpath( os.sep + 'testing' + os.sep + SOFTWARE_SHORT.lower() + '_tests.html' )
UNIT_TESTS_BUILD = os.path.normpath( os.sep + 'testing' + os.sep + SOFTWARE_SHORT.lower() + '_tests_build.html' )
VISUAL_TESTS_BASEPATH = os.sep + 'testing' + os.sep + 'visualization' + os.sep
VISUAL_TESTS = []

VISUAL_BASELINES_PATH = os.path.normpath( os.path.join( SOFTWARE_PATH, 'testing/visualization/baselines/' ) )
JSCOVERAGE_PATH = os.path.normpath( os.path.join( SOFTWARE_PATH, 'lib/jscoverage/' ) )
JSCOVERAGE_OUTPUT_PATH = os.path.normpath( os.path.join( tempfile.gettempdir(), 'xbuild_coverage/' ) )
JSCOVERAGE_ARGUMENTS = " --report-dir=" + JSCOVERAGE_OUTPUT_PATH + " --document-root=" + SOFTWARE_PATH + " --no-instrument=/lib/ --no-instrument=/testing/ --no-instrument=/utils/ --no-instrument=/core/testing/ --no-instrument=/math/testing/ --no-instrument=xtk-deps.js &"
SELENIUM_PATH = os.path.normpath( os.path.join( SOFTWARE_PATH, 'lib/selenium/' ) )
SELENIUM_CHROMEDRIVER_PATH = os.path.normpath( os.path.join( SELENIUM_PATH, 'chromedrivers/' ) )
PYPNG_PATH = os.path.normpath( os.path.join( SOFTWARE_PATH, 'lib/pypng-0.0.9/code' ) )

TEMP_PATH = tempfile.gettempdir()
