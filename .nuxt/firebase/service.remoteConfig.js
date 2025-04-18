export default async function (session) {
  // Can only be initiated on client side
  if (!process.client) {
    return
  }

  await import(/* webpackChunkName: 'firebase-remote-config' */'firebase/remote-config')

  const remoteConfigService = session.remoteConfig()

  remoteConfigService.settings = {
    fetchTimeoutMillis: 60000,
    minimumFetchIntervalMillis: 43200000
  }

  return remoteConfigService
}
