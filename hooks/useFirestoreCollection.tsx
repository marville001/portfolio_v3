import { collection } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { firestore } from '../lib/firebaseConfig';

const useFirestoreCollection = (path: string) => {
	const [value, loading, error] = useCollection(
		collection(firestore, path),
		{
			snapshotListenOptions: { includeMetadataChanges: true },
		}
	);

	return { value, loading, error }
}

export default useFirestoreCollection