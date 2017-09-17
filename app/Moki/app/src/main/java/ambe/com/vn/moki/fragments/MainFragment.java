package ambe.com.vn.moki.fragments;


import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import java.util.ArrayList;

import ambe.com.vn.moki.R;

/**
 * A simple {@link Fragment} subclass.
 */
public class MainFragment extends Fragment {

    private ArrayList<String> arrayList;
    int position;
    private View view;


    public MainFragment() {
        // Required empty public constructor
    }

    public static MainFragment newInstance() {
        MainFragment mainFragment = new MainFragment();
        return mainFragment;
    }


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        view = inflater.inflate(R.layout.fragment_main, container, false);
        return view;
    }

    @Override
    public void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        arrayList = new ArrayList<>();
        TrangChuFragment trangChuFragment = TrangChuFragment.newInstance();
        arrayList = trangChuFragment.getArr();

        Bundle bundle = getArguments();
        if (bundle != null) {
            position = bundle.getInt("ID", -1);
        }

    }

    @Override
    public void onActivityCreated(@Nullable Bundle savedInstanceState) {
        super.onActivityCreated(savedInstanceState);


    }
}
