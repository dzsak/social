variable "database" {
  type = string
  description = "Testing database string TF variable"
  default = "dummyDB"
}

variable "is-admin" {
  type = bool
  description = "Testing is-admin bool variable"
  default = true
}

variable "server_port" {
  type = number
  description = "Testing sensitive server id number TF variable"
  sensitive = true
  default = 1234
}
