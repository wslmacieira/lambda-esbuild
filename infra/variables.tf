variable "url" {
  default = "http://localhost:4566"
  description = "Localstack url deploy"
}

variable "domain_name" {
  default     = ".execute-api.localhost.localstack.cloud:4566"
  description = "Custom domain name"
  type        = string
}