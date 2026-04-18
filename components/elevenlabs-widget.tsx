"use client"

export function ElevenLabsWidget() {
  return (
    // @ts-expect-error - Custom element from ElevenLabs
    <elevenlabs-convai agent-id="agent_5501kgzectw4ep69wjamch6xr2k7" />
  )
}
