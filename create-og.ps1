Add-Type -AssemblyName System.Drawing
$w = 1200
$h = 630
$bmp = New-Object System.Drawing.Bitmap($w, $h)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = 'HighQuality'
$g.TextRenderingHint = 'AntiAlias'

# Dark background
$bgBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(15, 23, 42))
$g.FillRectangle($bgBrush, 0, 0, $w, $h)

# Cyan accent bar at top
$cyanColor = [System.Drawing.Color]::FromArgb(6, 182, 212)
$accentBrush = New-Object System.Drawing.SolidBrush($cyanColor)
$g.FillRectangle($accentBrush, 0, 0, $w, 6)

# Load and draw logo
$logo = [System.Drawing.Image]::FromFile("$PSScriptRoot\public\logo.png")
$g.DrawImage($logo, 80, 140, 120, 120)

# Title
$titleFont = New-Object System.Drawing.Font('Segoe UI', 48, [System.Drawing.FontStyle]::Bold)
$whiteBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
$g.DrawString('Cornerstone', $titleFont, $whiteBrush, 220, 140)

$subtitleFont = New-Object System.Drawing.Font('Segoe UI', 36, [System.Drawing.FontStyle]::Regular)
$g.DrawString('Builder Software', $subtitleFont, $whiteBrush, 220, 205)

# Tagline
$tagFont = New-Object System.Drawing.Font('Segoe UI', 24, [System.Drawing.FontStyle]::Regular)
$grayBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(148, 163, 184))
$g.DrawString('Construction Scheduling, Simplified.', $tagFont, $grayBrush, 80, 320)

# Features
$featFont = New-Object System.Drawing.Font('Segoe UI', 18, [System.Drawing.FontStyle]::Regular)
$cyanBrush = New-Object System.Drawing.SolidBrush($cyanColor)
$features = @('AI-powered smart scheduling', 'Vendor portal & communication hub', 'Real-time project visibility')
$y = 390
foreach ($f in $features) {
    $text = [char]0x2713 + ' ' + $f
    $g.DrawString($text, $featFont, $cyanBrush, 100, $y)
    $y += 35
}

# URL bottom left
$urlFont = New-Object System.Drawing.Font('Segoe UI', 20, [System.Drawing.FontStyle]::Regular)
$g.DrawString('cornerstonepm.ai', $urlFont, $cyanBrush, 80, 550)

# Price bottom right
$priceFont = New-Object System.Drawing.Font('Segoe UI', 20, [System.Drawing.FontStyle]::Bold)
$g.DrawString('Starting at $60/month', $priceFont, $whiteBrush, 900, 550)

$outPath = "$PSScriptRoot\public\og-image.png"
$bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose()
$bmp.Dispose()
$logo.Dispose()
Write-Host "OG image created at $outPath"
