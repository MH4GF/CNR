variable "netlify_token" {}
variable "netlify_base_url" {
  default = "https://api.netlify.com/api/v1"
}

provider "netlify" {
  token    = var.netlify_token
  base_url = var.netlify_base_url
}

resource "netlify_deploy_key" "key" {}

# 現状以下と同じ問題が出ていてplanができなくなっている。
# https://github.com/netlify/open-api/issues/162
# Netlify API側では修正はされているため、netlify providerがバージョンアップすれば解決する。
# https://github.com/terraform-providers/terraform-provider-netlify/issues/32
resource "netlify_site" "main" {
  name = "cosmic-night-run"

  repo {
    deploy_key_id = netlify_deploy_key.key.id
    command       = "yarn generate"
    dir           = "dist"
    provider      = "github"
    repo_path     = "MH4GF/CNR"
    repo_branch   = "master"
  }
}