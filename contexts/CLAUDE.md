# contexts/

React Context providers for global state management.

## Files

### `wishlist-context.tsx`
Frontend-only wishlist with localStorage persistence.

**Provider**: `WishlistProvider` - Wrap app in `layout.tsx`

**Hook**: `useWishlist()` returns:
- `wishlist: string[]` - Array of product IDs
- `toggleWishlist(id)` - Add/remove product
- `isInWishlist(id)` - Check if product is saved
- `wishlistCount` - Number of saved items
- `addToWishlist(id)`, `removeFromWishlist(id)`, `clearWishlist()`

**Storage**: localStorage key `apparelsclub_wishlist`

**Usage**:
```tsx
import { useWishlist } from "@/contexts/wishlist-context";

const { toggleWishlist, isInWishlist } = useWishlist();
const isSaved = isInWishlist(product.id);
```
