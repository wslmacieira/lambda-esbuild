output "rest_api_id" {
  description = "REST API id"
  value       = aws_api_gateway_rest_api.api_gw.id
}

output "deployment_id" {
  description = "Deployment id"
  value       = aws_api_gateway_deployment.apigw_deployment.id
}

output "deployment_invoke_url" {
  description = "Deployment invoke url"
  value       = aws_api_gateway_deployment.apigw_deployment.invoke_url
}

output "deployment_execution_arn" {
  description = "Deployment execution ARN"
  value       = aws_api_gateway_deployment.apigw_deployment.execution_arn
}

output "url" {
  description = "Serverless invoke url"
  value       = "${local.url}/${aws_api_gateway_deployment.apigw_deployment.stage_name}/${aws_api_gateway_resource.proxy.path_part}"
}

output "name" {
  description = "API Gateway name"
  value       = aws_api_gateway_rest_api.api_gw.name
}