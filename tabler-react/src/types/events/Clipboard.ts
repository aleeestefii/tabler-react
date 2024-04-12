/**
 * interface definitions for Clipboard EventHandling
 */

export interface ClipboardEvents {
  /**
   * Handle Copy Event
   */
  onCopy?: (event: React.ClipboardEvent) => any;
  /**
   * Handle Cut Event
   */
  onCut?: (event: React.ClipboardEvent) => any;
  /**
   * Handle Paste Event
   */
  onPaste?: (event: React.ClipboardEvent) => any;
}
