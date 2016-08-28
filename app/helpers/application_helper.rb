module ApplicationHelper
  def nav_links
    [
      ["about", "#about"],
      ["contact", "#contact"],
      ["blog", "#blog"],
      ["github", "https://www.github.com/jbernie2", target: "_blank"]
    ]
  end
end
