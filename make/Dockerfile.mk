# Build scripts
build/app_web:
	docker build \
		--tag develfish/app_web:1.0-SNAPSHOT \
		--file Dockerfile \
		.
