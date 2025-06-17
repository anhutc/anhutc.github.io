<?php
// PDF Viewer Script - Serves PDF with proper headers
header('Content-Type: application/pdf');
header('Content-Disposition: inline; filename="DANG-VAN-ANH-SMT.pdf"');
header('Cache-Control: public, must-revalidate, max-age=0');
header('Pragma: public');
header('Expires: Sat, 26 Jul 1997 05:00:00 GMT');
header('Last-Modified: ' . gmdate('D, d M Y H:i:s') . ' GMT');
header('Content-Length: ' . filesize('DANG-VAN-ANH-SMT.pdf'));

// Read and output the PDF file
readfile('DANG-VAN-ANH-SMT.pdf');
exit;
?> 